/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\theading\n\t\t\tslug\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n": types.GetPagesDocument,
    "\n\tquery getPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\tid\n\t\t\tslug\n\t\t\theading\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n": types.GetPageBySlugDocument,
    "\n\tquery getPlaces {\n\t\tplaces {\n\t\t\tid\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\turl\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n": types.GetPlacesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\theading\n\t\t\tslug\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPages($first: Int) {\n\t\tpages(first: $first) {\n\t\t\tid\n\t\t\theading\n\t\t\tslug\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\tid\n\t\t\tslug\n\t\t\theading\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPageBySlug($slug: String!) {\n\t\tpage(where: { slug: $slug }) {\n\t\t\tid\n\t\t\tslug\n\t\t\theading\n\t\t\tbody {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getPlaces {\n\t\tplaces {\n\t\t\tid\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\turl\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPlaces {\n\t\tplaces {\n\t\t\tid\n\t\t\tslug\n\t\t\tname\n\t\t\tlocation {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tgallery {\n\t\t\t\turl\n\t\t\t\theight\n\t\t\t\twidth\n\t\t\t}\n\t\t}\n\t}\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;