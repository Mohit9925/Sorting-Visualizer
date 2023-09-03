import React, { useEffect, useState } from 'react'
import Canvas from '../Canvas/canvas'
import './root.css'
import SortingAlgorithmOptions from '../sorting-algorithm-options/SortingAlgorithmOptions';
import { selectionSort } from '../../SortingAlgorithmsUtil';
function Root() {
  const [addElement , setAddElement] = useState("");
  const [arrayElements , setArrayElements] = useState([]);
  const [barHeightPercentages,setBarHeightPercentages] = useState([]);
  //barSwap state consists of 2 elements which has to be swapped 
  const [barSwap,setBarSwap] = useState([]);
  const selectedSortingAlgorithm = "selectionSort";
  const sortingAlgorithms = ['bubble sort','selection sort','insertion sort', 'quick sort']
  const normalizeBarHeight= ()=>{
    /*
      This function Normalizes the height according to the percentages with
      respect to the max height
    */ 
   
   if(!arrayElements.length) return [];
    let max = Math.max(...arrayElements);
    let percentages =[];
    for(let i=0;i<arrayElements.length;i++){
      percentages.push((arrayElements[i]/max)*100);
    }
    return percentages;
  }
  const handleAddElementClick =   (e)=>{
    /* 
      handles the Onclick method for add Element Button of the visualizer
      adds the element to the arrayElementState(which is an array of Object{barValue , heightPercentage})
    */
   
    setArrayElements([...arrayElements, Number(addElement)]);
    setAddElement("");
  }
  useEffect(()=>{
    /*
      Whenever a new Element/Bar is added to the Array
      the height of the bar is Normalized again
    */
    let percentages=normalizeBarHeight();
    setBarHeightPercentages(percentages);
    
  },[arrayElements]);
  
  const handleVisualizeClick =  ()=>{
       let elementsArrayClone = [...arrayElements]; 
      if (selectedSortingAlgorithm==="selectionSort"){
        selectionSort(elementsArrayClone,(array,i,j)=>{
          setBarSwap([i,j]); // animate here
          let temp=elementsArrayClone[i];
          elementsArrayClone[i]=elementsArrayClone[j];
          elementsArrayClone[j]=temp;
          setArrayElements(elementsArrayClone);
          
        });
        console.log(barSwap);
        // setBarSwap([]); 
      }
  }
  return (
    <div className='root'>
      <div className="header">
        <h1>Sorting Visualizer</h1>
      </div>
      <div className="canvas-wrapper">
        <Canvas barValue={arrayElements} barHeightPercentages={barHeightPercentages} barSwap={barSwap}/>
        <div className="canvas-params">
          <div>
            <input type="number" className='input-element' name="element-input" value={addElement} onChange={(e)=>{setAddElement(e.target.value)}}  />
            <button className='button add-button' onClick={handleAddElementClick}>Add</button>
            
          </div>
          <SortingAlgorithmOptions/>
          <button className='button visualize-button' onClick={handleVisualizeClick}>Visualize</button>
        </div>
      </div>
      
    </div>
  )
}

export default Root