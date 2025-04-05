import { engine } from "@/app/lib/ruleEngine";


export async function  GET(params) {

    // console.log("engin is" , engine)   

    const facts = [{
        couponCode: {"id":"1"}, // Change this value to test different coupons
        cartItemCount: 2
      }];  

     const result =  await engine.run(facts[0]);
    //  console.log("result is" , result) ;
     

    //   engine.run(facts).then(({ events }) => { 
    //     console.log("events is ", events)
    //     // events.forEach(event => {
    //     //   switch (event.type) {
    //     //     case 'discount':
    //     //       console.log(`Applying ${event.params.discountPercentage}% discount`);
    //     //       break;
    //     //     case 'freeShipping':
    //     //       console.log('Providing free shipping');
    //     //       break;
    //     //   }
    //     // });
    //   }).catch(err => {
    //     console.error(err); 
    //   });
      
    return Response.json({"data":"from json","result":result, "eent"})
    
}