import Dropdown from "./dropdowns/Dropdown";

export default function Sort({options, data, setModifiedData}) {
  
  const onChange = (e) => {
    if(e.target.name === "Name"){
      setModifiedData(nameListSort([...data]));
    } 
    if(e.target.name === "Role"){
      setModifiedData(roleListSort([...data]));
    } 
    if(e.target.name === "Most Recent"){
      setModifiedData(idListSort([...data]));
    } 
    if(e.target.name === "Status"){
      setModifiedData(statusListSort([...data]));
    } 
    if(e.target.name === "Branch"){
      setModifiedData(branchListSort([...data]));
    }

  }
  
  const nameListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
    
      return 0;
    });
    return newArray
  }

  const roleListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
      const roleA = a.role;
      const roleB = b.role;
      if (roleA > roleB) {
        return 1;
      }
      if (roleA < roleB) {
        return -1;
      }
    
      return 0;
    });
    return newArray
  }

  const idListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
        const nameA = a.id
        const nameB = b.id
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
      
        return 0;
      });
    return newArray
  }

  const statusListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
        const nameA = a.inquiry_status
        const nameB = b.inquiry_status
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
      
        return 0;
      });
    return newArray
  }

  const branchListSort = (data) => {
    let newArray = data?.sort(function(a, b) {
        const nameA = a.branch
        const nameB = b.branch
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
      
        return 0;
      });
    return newArray
  }

  return(
    <>
      <div className='p-2 font-medium'> Sort By: </div> 
      <Dropdown options={options} keyName={"Sort"} initialValue={"Most Recent"} onChange={onChange} />
    </>
  );
}
