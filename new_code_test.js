$(document).ready(function(){
    console.log("Script loaded successfully!");

      $.ajax({
                url: 'https://your-infinityfree-domain.com/DFproject/cf_configurator.php',
                method: 'GET',
                data: { action: 'step1' },
                success: function(response) {
                    console.log(response);
                },
                error: function(error) {
                    console.log('Error:', error);
                }
            });
});
