import React from 'react';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import { LinkCategory } from './CategoryTypes';
import './styles.css';

type Props = {
    src: string
    titleCategory: string
    link: LinkCategory
}

const Category = (
    { src, titleCategory, link }: Props
) => {
    console.log("Datos de mi Category:::", src, titleCategory, link);
    const CSS_HANDLES = [
        "category__item",
        "category__item--title",
        "category__item--image",
        "category__item--link"
    ];
    const handles = useCssHandles(CSS_HANDLES);
    return (
        <div className={`pt1 pl5 ${handles["category__item"]}`}>
            <Link
                to={link.url}
                className={handles["category__item--link"]}
            >
                <img src={src} alt={titleCategory} className={handles["category__item--image"]} />
                <p className={`${handles["category__item--title"]} externalClass`}>{titleCategory}</p>
            </Link>
        </div>
    );
}

Category.schema = {
    title: "Category",
    type: "object",
    properties: {
        src: {
            title: ".:Imagen Category:.",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        }
    }
}

export default Category;
