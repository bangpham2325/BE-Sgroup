console.log("duco thi dep")
document.addEventListener('DOMContentLoaded',function(){
    $('#delete_Article').on('show.bs.modal',function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id');
        console.log(id)
    })
})
