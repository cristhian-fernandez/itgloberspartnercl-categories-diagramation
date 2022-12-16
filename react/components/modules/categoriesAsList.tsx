import React from 'react';
import Category from '../Category';
import { CategoriesSchema } from '../CategoryTypes';

export const getCategoriesAsTSXList = (
    categories: CategoriesSchema
) => {
    return (
        categories.map((category: any, index) => {
            return (
                <Category
                    key={index}
                    src={category.image}
                    titleCategory={category?.titleCategory}
                    link={
                        category.link ? category.link
                            :
                            {
                                url: "string",
                                attributeNofollow: false,
                                attributeTitle: "",
                                openNewTab: false,
                                newTab: false
                            }
                    }
                />
            )
        })
    )
}