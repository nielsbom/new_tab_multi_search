$( document ).ready(function() {
    $("form").submit(function(event) {
      var url = $(this).data("url");
      var searchterm = $(this).find('input[name="searchterm"]').val();
      
      url = url.replace("{query}", searchterm);
      window.open(url, '_blank')
      event.preventDefault();
    })
});