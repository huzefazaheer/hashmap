import { createLinkedList } from "./linkedlist.js"

class Hashmap{
    constructor(){
        this.loadFactor = 0.8
        this.capacity = 16
        this.buckets = []
        this.itemCount = 0
        this.genBuckets()
       }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.capacity
        }
     
        return hashCode;
    } 

    genBuckets(){
        let newbuckets = []
        for(let i=0; i<(this.capacity - this.buckets.length); i++){
            newbuckets.push(null)
        }
        this.buckets = newbuckets.concat(this.buckets);
    }

    set(key, value){
        let index = this.hash(key)
        if(this.buckets[index] == null){
            this.buckets[index] = createLinkedList({[key]: value})
        }else {
            this.buckets[index].append({[key]: value})
        }
        this.itemCount = this.itemCount + 1
        if (this.itemCount > this.loadFactor * this.capacity){
            this.increaseBucketSize()
        }
        // console.log(this.buckets[index].toString())
    }

    get(key){
        let index = this.hash(key)
        try {
            let indexOfItem = this.buckets[index]
            return indexOfItem.at(indexOfItem.find(key))[key]
        } catch (error) {
            return null
        }
    }

    has(key){
        return Boolean(get(key))
    }

    remove(key){
        let index = this.hash(key)
        try {
            let indexOfItem = this.buckets[index]
            indexOfItem.removeAt(indexOfItem.find(key))
            return true
        } catch (error) {
            return false
        }
    }
    length(){
        return this.entries
    }

    keys(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucket.keytoString()
            }
        }
        return result
    }

    values(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucket.valuetoString()
            }
        }
        return result
    }

    entries(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucket.keytoString() + bucket.valuetoString() 
            }
        }
        return result
    }
     
    increaseBucketSize(){
        this.capacity = this.capacity + 16
        this.genBuckets()
    }
}

let map = new Hashmap()
map.genBuckets()
map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')

console.log(map.get("dog"))
console.log(map.remove('dog'))
console.log(map.get("dog"))
console.log(map.get("lion"))
console.log(map.remove('lion'))
console.log(map.get("lion"))
