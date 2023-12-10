import React, {useState} from 'react';
import { useEffect } from 'react';

const Problem1 = () => {

    const [inputData, setInputData] = useState([]);
    const [show, setShow] = useState('all');

    const handleClick = (val) =>{
        setShow(val);

        const data = JSON.parse(localStorage.getItem('names'));
        const table = document.querySelector('tbody');
        table.innerHTML = '';

        let sortedData;
        if (val === 'all') {
            sortedData = data?.sort((a, b) => {
                if (a.status === 'active') return -1;
                if (a.status === 'completed' && b.status !== 'active') return -1;
                return 0;
            });
        } else {
            sortedData = data?.filter(item => item.status === val);
        }
        sortedData?.map((item, index) => {
            table.innerHTML += `
                <tr key=${index}>
                    <th scope="row">${item?.name}</th>
                    <td>${item?.status}</td>
                </tr>
            `;
        });
    };
    
    useEffect(() => {

        localStorage.setItem('names', JSON.stringify(inputData));
        const data = JSON.parse(localStorage.getItem('names'));
        console.log(data);

      }, [inputData]);

      const handleSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value.toLowerCase();
        setInputData([...inputData, {name, status}]);
        e.target.reset();
      }



      

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                inputData?.map((item, index) => (
                                    <tr>
                                        <th scope="row">{item?.name}</th>
                                        <td>{item?.status}</td>
                                    </tr>
                                ) ) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;