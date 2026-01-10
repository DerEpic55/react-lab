// 3_1_1 Add and remove a CSS class
/*
    Сделайте так, чтобы щелчок на картинке удалял CSS-класс background--active из внешнего <div>, но добавлял класс picture--active к <img>. Повторный щелчок по фону восстановит исходные CSS-классы.

    Визуально вы должны увидеть, что щелчок на изображении удаляет фиолетовый фон и выделяет границу изображения. Щелчок за пределами изображения выделяет фон, но убирает выделение границы изображения.
*/

import { useState } from "react";

export default function Picture() {
    const [isBackgroundActive, setIsBackgroundActive] = useState(true);
    const [isPictureActive, setIsPictureActive] = useState(false);
    
    function handleClickBackground(){
        setIsBackgroundActive(true);
        setIsPictureActive(false);
    }

    function handleClickPicture(e : any){
        e.stopPropagation();
        setIsBackgroundActive(false);
        setIsPictureActive(true);
    }

    return (
        <div className={`background${isBackgroundActive ? ' background--active' : ''}`} onClick={handleClickBackground}>
            <img
                className={`picture${isPictureActive ? ' picture--active' : ''}`}
                onClick={handleClickPicture}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
            />
        </div>
    );
}