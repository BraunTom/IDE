import TheOneBuilder from "./TheOneBuilder";

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

    static get blocks(){
        return Array.from(BlockStore.store.values());
    }

    static importBlocks(blockSpecs){
        for (const blockSpec of blockSpecs) {
            TheOneBuilder.buildBlockFromPrimitive(blockSpec);
        }
    }
}