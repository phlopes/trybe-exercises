const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nameDelivery = order.order.delivery.deliveryPerson;
  const nameClient = order.name;
  const numberPhone = order.phoneNumber;
  const address = order.address.street;
  const addressNumber = order.address.number;
  const addressAp = order.address.apartment;

  console.log(`Olá ${nameDelivery}, entrega para: ${nameClient}, Telefone: ${numberPhone}, R. ${address}, N° ${addressNumber},AP: ${addressAp}`);
}

customerInfo(order);

const orderModifier = (order) => {
 const newClient =  order.name = 'Luiz Silva';
 const payment = order.payment.total = 50;
 const pizzaMuzarella = order.order.pizza.margherita = 'muzzarella';
 const pizzaCalabresa = order.order.pizza.pepperoni = 'calabresa';
 const cocaCola = order.order.drinks.coke.type;

 console.log(`Olá ${newClient}, o total do seu pedido de ${pizzaMuzarella}, ${pizzaCalabresa} e ${cocaCola} é R$${payment}`);
}
orderModifier(order);

