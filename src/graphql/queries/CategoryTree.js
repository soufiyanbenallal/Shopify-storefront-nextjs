import {gql} from "@apollo/client";

export const CATEGORY_TREE = gql `
    query CategoryTree3LevelsDeep {
        site {
            categoryTree {
            ...CategoryFields
            children {
                ...CategoryFields
                children {
                ...CategoryFields
                }
            }
            }
        }
        }

        fragment CategoryFields on CategoryTreeItem {
        name
        path
        entityId
        description
        image {
        
            urlOriginal
            altText
            isDefault 
            }
        }
`;