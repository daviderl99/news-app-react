import { React, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditNews() {
  const { id } = useParams();

  useEffect(() => {
    let data;

		axios.get(`http://localhost:8000/edit/?id=${id}`)
		.then(res => {
			data = res.data;
			this.setState({
				newsData: data	
			});
		})
		.catch(err => {})
  }, []);

  return (
    <div>
      <h1>News here</h1>
    </div>
  );
}

export default EditNews;