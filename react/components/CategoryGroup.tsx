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
    const { list } = useListContext() || []
    console.log(categories, children, list);
    console.log('Lista de Children:::', children);
    console.log('Lista de Categories:::', list);
    console.log('Categories:::', categories);



    const categoriesGroup = getCategoriesAsTSXList(categories);
    const newListContextValue = list.concat(categoriesGroup)

    console.log('categoriesGroup:::', categoriesGroup);
    console.log('categoriesGroup:::', newListContextValue);
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
                        <div>Estamos en mobile</div>
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
