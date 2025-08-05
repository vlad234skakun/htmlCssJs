// Создайте класс CopyEntity.У него должен быть статический метод copyObject, который бы копировал любой объект.Метод copyObject принимает любой объект и возвращает его копию.

class CopyEntitu {
    static copyObject (obj) {
        return JSON.parse(JSON.stringify(arr1)); 
    }
}


const arr1 = [1,2,3];

const arr2 = CopyEntitu.copyObject(arr1)

arr1[0] = 999;

console.log(arr1);
console.log(arr2);


// Нашел более современный метод. Его наверное лучше использовать


class copyObject2 {
    static copyObject2 (obj2) {
        return structuredClone(obj2)
    }
}

const kay1 = [10,20,30]

const kay2 = copyObject2.copyObject2(kay1)

kay2[0] = 999;

console.log(kay1);
console.log(kay2);




