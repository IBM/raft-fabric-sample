// /*
//  * SPDX-License-Identifier: Apache-2.0
//  */

// 'use strict';

// const { Contract } = require('fabric-contract-api');

// class FabCar extends Contract {

//     async initLedger(ctx) {
//         console.info('============= START : Initialize Ledger ===========');
//         const cars = [
//             {
//                 color: 'blue',
//                 make: 'Toyota',
//                 model: 'Prius',
//                 owner: 'Tomoko',
//             },
//             {
//                 color: 'red',
//                 make: 'Ford',
//                 model: 'Mustang',
//                 owner: 'Brad',
//             },
//             {
//                 color: 'green',
//                 make: 'Hyundai',
//                 model: 'Tucson',
//                 owner: 'Jin Soo',
//             },
//             {
//                 color: 'yellow',
//                 make: 'Volkswagen',
//                 model: 'Passat',
//                 owner: 'asdjfklasdkflk;lsadfjkasjdkfkasjldkfjadsjfkl',
//             },
//             {
//                 color: 'black',
//                 make: 'Tesla',
//                 model: 'S',
//                 owner: 'Adriana',
//             },
//             {
//                 color: 'purple',
//                 make: 'Peugeot',
//                 model: '205',
//                 owner: 'Michel',
//             },
//             {
//                 color: 'white',
//                 make: 'Chery',
//                 model: 'S22L',
//                 owner: 'Aarav',
//             },
//             {
//                 color: 'violet',
//                 make: 'Fiat',
//                 model: 'Punto',
//                 owner: 'Pari',
//             },
//             {
//                 color: 'indigo',
//                 make: 'Tata',
//                 model: 'Nano',
//                 owner: 'Valeria',
//             },
//             {
//                 color: 'brown',
//                 make: 'Holden',
//                 model: 'Barina',
//                 owner: 'Shotaro',
//             },
//         ];


//         car1Public = {
//           color: 'indigo',
//                 make: 'Tata',
//                 model: 'Nano',
//                 owner: 'Valeria',
//         }

//         car1Private = {
//           price: '34'
//         }

//         car2Public = {
//           color: 'brown',
//           make: 'Holden',
//           model: 'Barina',
//           owner: 'Shotaro',
//         }

//         car2Private = {
//           price: '30',
//         }

//         for (let i = 0; i < cars.length; i++) {
//             cars[i].docType = 'car';
//             await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
//             console.info('Added <--> ', cars[i]);
//         }
//         console.info('============= END : Initialize Ledger ===========');
//     }

//     async queryCar(ctx, carNumber) {
//         const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
//         if (!carAsBytes || carAsBytes.length === 0) {
//             throw new Error(`${carNumber} does not exist`);
//         }
//         console.log(carAsBytes.toString());
//         return carAsBytes.toString();
//     }

//     async querySingleCarPublic(ctx, key) {
//       console.log('Key is ' + key);
//       const res = await ctx.stub.getPrivateData('collectionCar', key);
//       if (res){
//           console.log('Result is\n' + JSON.parse(res.toString()));
//           let Record;
//           try {
//               Record = JSON.parse(res.toString('utf8'));
//           } catch (err) {
//               console.log(err);
//               Record = res.toString('utf8');
//           }
//           return JSON.stringify([{ key, Record }]);
//       }
//       else{
//           console.err('Did not find the car with carNo ' + key);
//           return [];
//       }
//   }

//   async querySingleCarPrivate(ctx, key) {
//     console.log('Key is ' + key);
//     const res = await ctx.stub.getPrivateData('collectionCarPrivateDetails', key);
//     if (res){
//         console.log('Result is\n' + JSON.parse(res.toString()));
//         let Record;
//         try {
//             Record = JSON.parse(res.toString('utf8'));
//         } catch (err) {
//             console.log(err);
//             Record = res.toString('utf8');
//         }
//         return JSON.stringify([{ key, Record }]);
//     }
//     else{
//         console.err('Did not find the car with carNo ' + key);
//         return [];
//     }
// }

//     async createCar(ctx, carNumber, make, model, color, owner) {
//         console.info('============= START : Create Car ===========');

//         const car = {
//             color,
//             docType: 'car',
//             make,
//             model,
//             owner,
//         };

//         await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
//         console.info('============= END : Create Car ===========');
//     }

//     async queryAllCars(ctx) {
//         const startKey = 'CAR0';
//         const endKey = 'CAR999';

//         const iterator = await ctx.stub.getStateByRange(startKey, endKey);

//         const allResults = [];
//         while (true) {
//             const res = await iterator.next();

//             if (res.value && res.value.value.toString()) {
//                 console.log(res.value.value.toString('utf8'));

//                 const Key = res.value.key;
//                 let Record;
//                 try {
//                     Record = JSON.parse(res.value.value.toString('utf8'));
//                 } catch (err) {
//                     console.log(err);
//                     Record = res.value.value.toString('utf8');
//                 }
//                 allResults.push({ Key, Record });
//             }
//             if (res.done) {
//                 console.log('end of data');
//                 await iterator.close();
//                 console.info(allResults);
//                 return JSON.stringify(allResults);
//             }
//         }
//     }

//     async changeCarOwner(ctx, carNumber, newOwner) {
//         console.info('============= START : changeCarOwner ===========');

//         const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
//         if (!carAsBytes || carAsBytes.length === 0) {
//             throw new Error(`${carNumber} does not exist`);
//         }
//         const car = JSON.parse(carAsBytes.toString());
//         car.owner = newOwner;

//         await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
//         console.info('============= END : changeCarOwner ===========');
//     }

// }

// module.exports = FabCar;

/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const cars = [
            {
                color: 'blue',
                make: 'Toyota',
                model: 'Prius',
                owner: 'Tomoko',
            },
            {
                color: 'red',
                make: 'Ford',
                model: 'Mustang',
                owner: 'Brad',
            },
            {
                color: 'green',
                make: 'Hyundai',
                model: 'Tucson',
                owner: 'Jin Soo',
            },
            {
                color: 'yellow',
                make: 'Volkswagen',
                model: 'Passat',
                owner: 'Max',
            },
            {
                color: 'black',
                make: 'Tesla',
                model: 'S',
                owner: 'Adriana',
            },
            {
                color: 'purple',
                make: 'Peugeot',
                model: '205',
                owner: 'Michel',
            },
            {
                color: 'white',
                make: 'Chery',
                model: 'S22L',
                owner: 'Aarav',
                price: '44',
            },
            {
                color: 'violet',
                make: 'Fiat',
                model: 'Punto',
                owner: 'Pari',
                price: '40',

            },
            {
                color: 'indigo',
                make: 'Tata',
                model: 'Nano',
                owner: 'Valeria',
                price: '34',
            },
            {
                color: 'brown',
                make: 'Holden',
                model: 'Barina',
                owner: 'Shotaro',
                price: '30',
            },
        ];

        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }

        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async createPrivateCar(ctx, carNumber, make, model, color, owner) {
      console.info('============= START : createPrivateCar ===========');

      let car1Public = {
        color: 'indigo',
              make: 'Tata',
              model: 'Nano',
              owner: 'Valeria',
      }

      let car1Private = {
        price: '34'
      }

      let car2Public = {
        color: 'brown',
        make: 'Holden',
        model: 'Barina',
        owner: 'Shotaro',
      }

      let car2Private = {
        price: '30',
      }

      await ctx.stub.putPrivateData('collectionCar','CAR1', Buffer.from(JSON.stringify(car1Public)));
      await ctx.stub.putPrivateData('collectionCar','CAR2', Buffer.from(JSON.stringify(car2Public)));
      await ctx.stub.putPrivateData('collectionCarPrivateDetails','CAR1', Buffer.from(JSON.stringify(car1Private)));
      await ctx.stub.putPrivateData('collectionCarPrivateDetails','CAR2', Buffer.from(JSON.stringify(car2Private)));

  }

    async queryAllCars(ctx) {
        const startKey = 'CAR0';
        const endKey = 'CAR999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async querySingleCarPublic(ctx, key) {
        console.log('Key is ' + key);
        const res = await ctx.stub.getPrivateData('collectionCar', key);
        if (res){
            console.log('Result is\n' + JSON.parse(res.toString()));
            let Record;
            try {
                Record = JSON.parse(res.toString('utf8'));
            } catch (err) {
                console.log(err);
                Record = res.toString('utf8');
            }
            return JSON.stringify([{ key, Record }]);
        }
        else{
            console.err('Did not find the car with carNo ' + key);
            return [];
        }
    }

    async querySingleCarPrivate(ctx, key) {
      console.log('Key is ' + key);
      const res = await ctx.stub.getPrivateData('collectionCarPrivateDetails', key);
      if (res){
          console.log('Result is\n' + JSON.parse(res.toString()));
          let Record;
          try {
              Record = JSON.parse(res.toString('utf8'));
          } catch (err) {
              console.log(err);
              Record = res.toString('utf8');
          }
          return JSON.stringify([{ key, Record }]);
      }
      else{
          console.err('Did not find the car with carNo ' + key);
          return [];
      }
  }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}

module.exports = FabCar;

