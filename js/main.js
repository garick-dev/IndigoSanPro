document.addEventListener("DOMContentLoaded", (ev) => {


    const bannerBtnEl = document.querySelectorAll(".button_banner");
    const workBtnEl = document.querySelector(".button_work");
    const priceListBtnEl = document.querySelector(".button_services--transparent");
    const modalFormEl = document.querySelector(".modal__form");
    const modalPriceListEl = document.querySelector(".modal__price-list");
    const headerEl = document.querySelector(".header__left");
    const burgerButtonEl = document.querySelector(".burger");
    const modalPoliticEl = document.querySelector(".modal_politic");
    const politicBtnEl = document.querySelector(".politic");
    const menuEl = document.querySelector(".menu").innerHTML;

    let burgerMenuMobileEl = `<div class="burger-menu">
                        <div class="overlay overlay_burger-menu">
                            <ul class="menu-mobile">
                            ${menuEl}
                            </ul>
                        </div>
                    </div>`;

    const closeForm = () => {
        document.addEventListener("click", (ev) => {
            if (ev.target && ev.target.classList.contains("overlay") || ev.target && ev.target.classList.contains("menu__link")) {
                document.body.style.overflowY = "auto";
                modalFormEl.classList.add("hidden");
                modalPriceListEl.classList.add("hide");
                modalPoliticEl.classList.add("hidden");
                const mobileMenuEl = document.querySelector(".burger-menu");
                mobileMenuEl.parentNode.removeChild(mobileMenuEl);

            }
        })
    }
    closeForm();

   const showModalForBanner = () => {
       bannerBtnEl.forEach(element => {
           element.addEventListener("click", (ev) => {
               ev.preventDefault();
               if (modalFormEl.classList.contains("hidden")) {
                   modalFormEl.classList.remove("hidden");
                   document.body.style.overflowY = "hidden";
               }
           })
       });
   }
    showModalForBanner();


    const showModalForWork = () => {
            workBtnEl.addEventListener("click", (ev) => {
                ev.preventDefault();
                if (modalFormEl.classList.contains("hidden")) {
                    modalFormEl.classList.remove("hidden");
                    document.body.style.overflowY = "hidden";
                }
            })

    }
    showModalForWork();

    const showPriceList = () => {
        priceListBtnEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (modalPriceListEl.classList.contains("hide")) {
                modalPriceListEl.classList.remove("hide");
                document.body.style.overflowY = "hidden";
            }
            else {
                modalPriceListEl.classList.add("hide");
            }
        })
    }
    showPriceList();

    const showMobileMenu = () => {
        burgerButtonEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            headerEl.insertAdjacentHTML("beforeend", burgerMenuMobileEl);
            document.body.style.overflowY = "hidden";
        })
    }
    showMobileMenu();

    const showPolitic = () => {
        politicBtnEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (modalPoliticEl.classList.contains("hidden")) {
                modalPoliticEl.classList.remove("hidden");
                document.body.style.overflowY = "hidden";
            }
        })
    }
    showPolitic();

    const checkInputForm = () => {
        document.addEventListener("click", (ev) => {
            if (ev.target && ev.target.classList.contains("order__form") || ev.target && ev.target.classList.contains("order__input")) {
                const orderForm = document.querySelectorAll(".order__form");
                orderForm.forEach(element => {
                    element.addEventListener("keypress", (v) => {
                        const name = element.querySelector("#name").value;
                        const phone = element.querySelector("#phone").value;
                        const btn = element.querySelector(".button_order");
                        if (name.length >= 3 && phone.length >= 11) {
                            btn.classList.add("gradient");
                            btn.classList.remove("button__disabled");
                        }
                    })
                })
            }
        })

    }
    checkInputForm();

    const addMaskForPhone = () => {
        document.addEventListener("keypress", (ev) => {
            if (ev.target && ev.target.classList.contains("order__phone")) {
                let phone = ev.target;
                let maskOptions = {
                    mask: '+{7}(000)000-00-00',
                    // lazy: false
                };
                let mask = IMask(phone, maskOptions);
            }
        });

    }
    addMaskForPhone();
});

