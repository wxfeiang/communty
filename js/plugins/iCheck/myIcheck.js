$(document).ready(function () {
	//单选
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
   
    $('#allOptionId').on('ifChecked', function(event){  
		$('input').iCheck('check'); 
		 
	});
	//反选
	$('#allOptionId').on('ifUnchecked', function(event){  
		$('input').iCheck('uncheck');  
		
	}); 
});