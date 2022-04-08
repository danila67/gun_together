import { player, PLayer } from "../player";


export const fun_dom = {
    get_id: {
      start_menu: document.getElementById("button_start"),
    },
    check() {
      this.start_menu.create.addEventListener('click', (event) => {

        if (document.getElementById('pl_name').value) player.name = document.getElementById('pl_name').value;
        if (document.getElementById('pl_img').value) player.img = document.getElementById('pl_img').value;
        
        player.hero = new PLayer(player.name, player.img)
      });
    }
}
