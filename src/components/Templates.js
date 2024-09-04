import React from 'react'
import { Link } from 'react-router-dom';

let tempImgDir=process.env.PUBLIC_URL + "images/templates/";

const templateList=[
      {id:1001,name:"Basic",image:"template1.png",status:"active"},
      {id:1002,name:"Web Developer",image:"template1.png",status:"inactive"},
      {id:1003,name:"Full stack Developer",image:"template1.png",status:"inactive"},
      {id:1004,name:"IT Sales manager",image:"template1.png",status:"inactive"},
]

function Templates() {
  return (
    <>
              <div className='row justify-content-center'>
                    <div className='col-12 text-center mt-3'>
                        <h2 className='fw-bold'>Choose  Resume Template</h2>
                    </div>
                    {templateList.map((data)=>{
                      return(

                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-3'>
                          {data.status==="active"
                          ?
                          <Link to="/edit">
                          <div className="TempCard" >
                              <img src={tempImgDir+data.image} className="w-100" alt="template " />
                              <div className='useBtn btn btn-primary '>Use Template</div>
                          </div>
                          </Link>
                          :
                          
                          <div className="TempCard" >
                              <img src={tempImgDir+data.image} className="w-100" alt="template " />
                              <div className='useBtn btn btn-dark '>Lauching soon</div>
                          </div>
                          
                          }
                          
                        </div>
                      )
                    })}
                    
              </div>

    </>
  )
}

export default Templates
