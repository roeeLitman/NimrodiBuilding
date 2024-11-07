import { useState, useEffect } from 'react';
import buliding from "../data/building.json"


interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>(buliding);

  //FILL HERE LOGIC TO SET THE BUILDING DATA


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    //FILL HERE
    return buildingData[floorIndex]

  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map( (flor)=> {return flor.activity} )
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
