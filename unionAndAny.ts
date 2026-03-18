// union
let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';



// any
let orders = ['12', '20', '28', '42'];

let currentOrder: string | undefined;

for(let order of orders){
  if(order === '28'){
    currentOrder = order;
    break;
  }
}

currentOrder = '11';

console.log(currentOrder);