const newItem = null

$(function addListItem() {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        let newItem = $('#shopping-list-entry').val().trim()
        // console.log(newItem)
        newItem === undefined || newItem === '' ? alert('Provide item name') : 
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`)
    })
})

$(function deleteListItem() {
    $('.shopping-item-delete').on('click', function(e){
        e.preventDefault()
        this.closest('li').remove()
    })
})
$(function toggleListItemCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        e.preventDefault()
        console.log($(this).closest('li').find('.shopping-item').html())
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
})
