const newItem = ''

$(function addListItem() {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        newItem = $('#shopping-list-entry').val()
        $('#shopping-list').append(<li>
            <span class="shopping-item">apples</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>)
    })
})
