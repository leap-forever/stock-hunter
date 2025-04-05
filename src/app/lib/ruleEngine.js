import { Engine } from "json-rules-engine";

export const engine = new Engine();   
console.log("engine added")
engine.on("success",event =>{
    console.log("success event",event)
})

  const rules = [
    {
      name: "10% Off Coupon",
      conditions: {
        all: [
          {
            fact: "couponCode",
            operator: "equal",
            value: "1",
            path:"$.id"
          }
        ]
      },
      event: {
        type: "discount",
        params: {
          discountPercentage: 10
        }
      }
    },
  ];

  rules.forEach(rule => engine.addRule(rule));
