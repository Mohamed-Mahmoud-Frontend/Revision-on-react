
// Get data
useEffect(() => {
    axios.get('/api/customer')
      .then(response => setCustomerData(response.data))
      .catch(error => console.error('Error fetching customer data', error));
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

//  Put data
const handleUpdateData = () => {
    // هنا استخدمت مكتبه AXIOS
    axios.put('/api/update-customer', EditCustomerData)
      .then(response => {
        // دي الي هتغير الداتا وتثبت الداتا الجديده
        setData(response.data);
        console.log('هنا لو العميل غير الداتا ومحتاج اخلي يبعت ريكوست');
      })
    //   في حاله لو حصل مشكله او وجود اي ايرور
      .catch(error => console.error('Error updating customer data', error));
  };




