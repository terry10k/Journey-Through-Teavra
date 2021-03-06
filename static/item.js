class item  {
    /**
     * Constructs generic item instance
     * itemName - optional name of item
     * strength - Amount of strength the item adds to the player
     */
    constructor(itemName){
        this.itemName = itemName;
    }

    //Returns a string with a description of the item
    displayDescription(){
        return 'This is a ${this.itemName}.';
    }

    //Returns item name
    getItemName(){
        return this.itemName;
    }

    //Sets the item name
    setItemName(itemName){
      this.itemName = itemName;
    }

    //Returns generic item/object type
    getItemType(){
      return "item";
    }

}