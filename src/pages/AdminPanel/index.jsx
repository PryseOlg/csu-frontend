import React, {useState} from 'react';
import Footer from '@Helpers/Footer/Footer';
import Menu from '@Helpers/Menu/Menu';

import image_icon from "@Assets/images/image_icon.png";
import cross_icon from "@Assets/images/cross.png";

import "./styles.less";


const AdminPanel = () => {
    const maxSymbolsCount = 150;
    const [symbolsCount, setSymbolsCount] = useState(0);
    const [loadedImage, setLoadedImage] = useState(null);
    const [loadedImageName, setLoadedImageName] = useState("");
    const [imageLoadingErrorText, setImageLoadingErrorText] = useState("");
    const [shouldTexareaBeRed, setShouldTexareaBeRed] = useState(false);

    const onInputUpdate = (e) => {
        setSymbolsCount(e.target.value.length);
        setShouldTexareaBeRed(false);
    }

    const onImageLoaded = (e) => {
        const file = e.target.files[0];
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = function() {
            if(["image/jpeg", "image/jpg", "image/png"].includes(file.type) && this.width < 270 || this.height < 270){
                setLoadedImage(file);
                setLoadedImageName(file.name);
                setImageLoadingErrorText("");
            }else{
                setLoadedImage(null);
                setLoadedImageName("");
                setImageLoadingErrorText('Неверный формат изображения');
            }
        }
    }

    const onImageDeloaded = () => {
        setLoadedImage(null);
        setLoadedImageName("");
    }

    const onSubmit = (e) => {
        if (symbolsCount == 0) {
            setShouldTexareaBeRed(true);
        } else if (symbolsCount > maxSymbolsCount) {
            
        } else if (!loadedImage) {
            setImageLoadingErrorText('Изображение не прикреплено');
        } else {
            return
        }

        e.preventDefault();
    }

    return (
    <label className='page'>
        <header className='header'>
            <div className='page__middle-zone small-header__middle-zone'>
                <Menu />
            </div>
        </header>
        <main className='news-body page__middle-zone'>
            <div className='description'>
                <p className='description__title'>Добавить новость</p>
                <p className='description__text'>Введите текст новости, а также приложите изображение (размер: 270x270px)</p>
            </div>
            <form className='news-form' onChange={onInputUpdate} onSubmit={onSubmit} action="admin/news" method="POST">
                <textarea 
                    className={"news-form__input" + (shouldTexareaBeRed ? " news-form__input_color_red" : "")}
                    type="text"
                    name="text"
                    placeholder="Введите текст новости"/>
                <p className='news-form__symbols-counter'>Символов: <span className={symbolsCount > maxSymbolsCount ? "news-form__symbols-counter_color_red" : ""}>{symbolsCount}</span>/{maxSymbolsCount}</p>
                <div className='news-from__image-block'>
                    <label>
                        <img className='icon' src={image_icon}/>
                        <input 
                            type="file" 
                            name="photo" 
                            accept=".jpg, .jpeg, .png"
                            onChange={onImageLoaded}></input>
                        <span>+ Добавить изображение</span>
                    </label>
                    {loadedImage && (
                        <div className='loaded-image-block'>
                            <img className='loaded-image-block__image' src={URL.createObjectURL(loadedImage)}/> 
                            <p className='loaded-image-block__image-name'>{loadedImageName}</p>
                            <img className='loaded-image-block__cross-image' src={cross_icon} onClick={onImageDeloaded}/>
                        </div>
                    )}
                    {imageLoadingErrorText && (
                        <p className='loaded-image-block__error-text'>{imageLoadingErrorText}</p>
                    )}
                </div>
                <button className='yellow-button news-form__button'>Применить</button>
            </form>
        </main>
        <Footer />
    </label>
    );
};

export default AdminPanel;