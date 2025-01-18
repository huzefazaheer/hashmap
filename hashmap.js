class Hashmap{
    constructor(){
        this.loadfactor = 0.88
        this.capacity = 16
        this.buckets = []
        this.buckets = this.genBuckets()
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
        this.buckets = newbuckets.concat(this.buckets)
    }

    set(key, value){
        // hash key and store value in that index
    }

    get(key){
        // hash key and retrive value in that index
    }

    has(key){
        // iterate over key and see if it is in hashmap or not
    }

    remove(key){
        // go to the bucket at the hash and remove the value at that place
    }

    length(){
        // get number of keys stored
        // create a seperate variable to store length to avoid having to iterate over hashmap?
    }

    keys(){
        // return all the keys as an array
    }

    values(){
        // return an array of all the values
    }

    entries(){
        // return an array containing all key value pairs
    }
     
    increaseBucketSize(){
        this.capacity = this.capacity + 16
        this.genBuckets()
    }
}

map = new Hashmap()
map.increaseBucketSize()