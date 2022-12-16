import React, { PropsWithChildren } from 'react';
import { CategoriesSchema } from './CategoryTypes';
import { useDevice } from 'vtex.device-detector';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { useCssHandles } from 'vtex.css-handles';
import { getCategoriesAsTSXList } from './modules/categoriesAsList';

export interface CategoryGroupProps {
    categories: CategoriesSchema
}
const CategoryGroup = ({
    categories,
    children
}: PropsWithChildren<CategoryGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || [];
    const categoriesGroup = getCategoriesAsTSXList(categories);
    const newListContextValue = list.concat(categoriesGroup)

    const CSS_HANDLES = [
        "category__container"
    ]
    const handles = useCssHandles(CSS_HANDLES);

    return (
        <ListContextProvider list={newListContextValue}>
            {
                isMobile
                    ?
                    <div>
                        <div className={handles["category__container"]}>
                            {categoriesGroup}
                        </div>
                    </div>
                    : children

            }

        </ListContextProvider>
    )
}
export default CategoryGroup;
