<?php
class API {
  // Properties 
  private $apiUrl;



		function __construct($arg) {
			if($arg){
				$this->apiUrl = $arg;
			}
			
		  }

		  // Methods
		  function setter($arg) {			 
			$this->apiUrl = $arg;
		  }
		  
		  
		  function getter() {			  
			 return $this->apiUrl;
		  }
		  		  
		  
		function  getApiData()
		{
			//Write your code

			$api_url = 'https://jsonplaceholder.typicode.com/posts';
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_URL, $api_url);
			$result = curl_exec($ch);
			curl_close($ch);
			$obj = json_decode($result);
			return $obj;
		  
		}

  
  
}




?>