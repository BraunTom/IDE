export default class BlockStore{
    static store = new Map();

    static add(block){
        BlockStore.store.set(block.ID, block);
    }

    static resolve(ID){
        return BlockStore.store.get(ID);
    }

    static remove(ID){
        BlockStore.store.delete(ID);
    }
}