class Node{
    constructor(value){
        this.value = value
        this.header = null
    }
}

export const createLinkedList = function(value_ = null){

    let basenode = new Node(value_)
    let listsize = 0

    function append(val, node = basenode){
        if(basenode.value == null){
            basenode.value = val
            listsize++
        }else{
            if (node.header == null){
                node.header = new Node(val)
                listsize++
            }else{
                append(val, node.header)
            }
        }
    }

    function prepend(val){
        basenode1 = new Node(val)
        basenode1.header = basenode
        basenode = basenode1
        listsize++
    }

    function at(index, node=basenode){
        if(index != 0){
            return at(index-1, node.header)
        }else{
            return node.value
        }
    }

    function contains(value){
        if (find(value) == null){
            return false
        }else {
            return true
        }
    }

    function find(value, node = basenode, index = 0){
        let key = Object.keys(node.value)[0]
        if(key == value){
            return index
        }else {
            if(node.header == null){
                return null
            }else{
                return find(value, node.header, index = index+1)
            }
        }
    }

    function insertAt(index, value, node = basenode){
        if (index == 0){
            let tmpnode = basenode
            basenode = new Node(value)
            basenode.header = tmpnode
        }else if(index == 1){
            let tempnode = node
            node.header = new Node(value)
            node.header.header = tempnode.header
        }else{
            if(node.header!=null){
                insertAt(index = index-1, value, node.header)
            }else return null
        }
    }  

    function removeAt(index, node=basenode){
        if(index == 0){
            basenode = node.header
        }else if(index == 1){
            node.header = node.header.header
        }else if(node.header != null){
            return removeAt(index-1, node.header)
        }return null
        
    }

    function head(){
        return basenode.value
    }

    function tail(node=basenode){
        if(node.header == null){
            return node.value
        }else{
            return tail(node.header)
        }
    }

    function pop(secondlastnode=basenode){
        if(secondlastnode == basenode && basenode.header == null){
            basenode.value = null
        }else{
            node = secondlastnode.header
            if(node.header == null){
                secondlastnode.header = null
            }else{
                return pop(secondlastnode.header)
            }
        }
    }

    function size(){
        return listsize
    }

    function toString(node = basenode, result= ''){
        result = result + '(' + node.value + ') ' + '-> '
        if(node.header == null){
            result = result + 'null'
            return result
        }else{
            return toString(node.header, result)
        }
    }

    function keytoString(node = basenode, result= ''){
        result = result + Object.keys(node.value)+ ', ' 
        if(node.header == null){
            return result
        }else{
            return valuetoString(node.header, result)
        }
    }

    function valuetoString(node = basenode, result= ''){
        let key = Object.keys(node.value)[0]
        result = result + node.value[key] + ', '
        if(node.header == null){
            return result
        }else{
            return keytoString(node.header, result)
        }
    }

    return {toString, append, prepend, size, tail, head, pop, at, find, contains, insertAt, removeAt, keytoString, valuetoString}
}
