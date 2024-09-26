interface PaymentProcessor {
  processPayment(amount: number): void;
}

class StripePaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con tarjeta vía Stripe`);
  }
}

// Procesador de pagos con PayPal
class PayPalPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con PayPal`);
  }
}

interface PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor;
}

class StripePaymentProcessorFactory implements PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new StripePaymentProcessor();
  }
}

class PaypalPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new PayPalPaymentProcessor();
  }
}

class PaymentProccessorClient {
  private payment: PaymentProcessor;

  constructor(factory: PaymentProcessorFactory) {
    this.payment = factory.createPaymentProcessor();
  }

  public pay(amount: number) {
    this.payment.processPayment(amount);
  }
}

const stripe = new PaymentProccessorClient(new StripePaymentProcessorFactory());
const paypal = new PaymentProccessorClient(new PaypalPaymentFactory());

stripe.pay(100);
paypal.pay(50);
