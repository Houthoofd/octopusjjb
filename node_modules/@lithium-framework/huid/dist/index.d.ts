export type FixedLengthString<Length extends number> = string & {
    __fixedLength: Length;
};
export type ComponentId = FixedLengthString<12>;
export type Segment = FixedLengthString<4>;
export type ParentSegementId = `${Segment}-${Segment}-${Segment}`;
export type CollectionId = FixedLengthString<12>;
export type HUID = `${ComponentId}-${ParentSegementId}-${CollectionId}`;
/**
 * Interface pour les options de l'UUID hiérarchique.
 */
export interface HierarchicalUUIDOptions {
    /**
     * Identifiant parent (optionnel).
     */
    parentId?: FixedLengthString<12>;
    /**
     * Identifiant de collection (optionnel).
     */
    collectionId?: FixedLengthString<12>;
}
/**
 * Classe _HUID pour manipuler les UUID hiérarchiques.
*/
export declare class _HUID extends String {
    /**
     * Obtient l'identifiant de composant en extrayant la première partie de l'UUID.
     * @returns L'identifiant de composant.
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.componentId); // '123456789012'
     * ```
    */
    get componentId(): ComponentId;
    /**
     * Obtient la première section de l'UUID après division par '-'.
     * @returns La première section de l'UUID.
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.section1); // '1234'
     * ```
    */
    get section1(): Segment;
    /**
     * Obtient la deuxième section de l'UUID après division par '-'.
     * @returns La deuxième section de l'UUID.
     * @example
     * ```typescipt
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.section2); // '5678'
     * ```
    */
    get section2(): Segment;
    /**
     * Obtient la troisième section de l'UUID après division par '-'.
     * @returns La troisième section de l'UUID.
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.section3); // '90ab'
     * ```
    */
    get section3(): Segment;
    /**
     * Obtient l'identifiant de collection en extrayant la cinquième partie de l'UUID.
     * @returns L'identifiant de collection.
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.collectionId); // 'abcdefabcdef'
     * ```
    */
    get collectionId(): CollectionId;
    /**
     * Obtient l'identifiant parent en concaténant les sections 1, 2 et 3.
     * @returns L'identifiant parent.
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  console.log(uuid.parentId); // '1234567890ab'
     * ```
    */
    get parentId(): FixedLengthString<12>;
    /**
     * Étend l'UUID hiérarchique avec des options personnalisées.
     * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
     * @returns Un nouvel UUID hiérarchique (_HUID).
     * @example
     * ```typescript
     *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
     *  const extendedUUID = uuid.extend({ parentId: '098765432109', collectionId: 'abcdefabcdef' });
     *  console.log(extendedUUID); // Un nouvel _HUID avec les sections mises à jour.
     * ```
    */
    extend(options?: HierarchicalUUIDOptions): _HUID;
}
/**
 * Classe pour générer des UUID.
*/
export declare class uuid {
    /**
     * Obtient une valeur par défaut pour l'identifiant de composant.
     * @returns '000000000000' en tant que ComponentId.
    */
    static get componentId(): ComponentId;
    /**
     * Obtient une valeur par défaut pour la première section de l'UUID.
     * @returns '0000' en tant que Segment.
    */
    static get segment1(): Segment;
    /**
     * Obtient une valeur par défaut pour la deuxième section de l'UUID.
     * @returns '0000' en tant que Segment.
    */
    static get segment2(): Segment;
    /**
     * Obtient une valeur par défaut pour la troisième section de l'UUID.
     * @returns '0000' en tant que Segment.
    */
    static get segment3(): Segment;
    /**
     * Obtient une valeur par défaut pour l'identifiant de collection.
     * @returns '000000000000' en tant que CollectionId.
    */
    static get collectionId(): CollectionId;
    /**
     * Obtient un UUID NIL (null) par défaut.
     * @returns L'UUID NIL sous forme de chaîne.
    */
    static get NIL(): _HUID;
    /**
     * Encode une chaîne de longueur fixe en remplaçant certains caractères par des valeurs hexadécimales aléatoires.
     * @param chaine - Une chaîne de longueur fixe.
     * @returns Une chaîne de longueur fixe avec des valeurs hexadécimales aléatoires.
     * @example
     * ```typescript
     *  const encoded = uuid.encode('123456789012');
     *  console.log(encoded); // '1a2b3c4d5e6f'
     * ```
    */
    static encode<N extends number = 4 | 12>(chaine: FixedLengthString<N>): FixedLengthString<N>;
    /**
     * Génère un UUID de version 4 en utilisant des valeurs aléatoires.
     * @returns Un UUID de version 4 sous forme de chaîne.
     * @example
     * ```typescript
     *  const uuidV4 = uuid.v4();
     *  console.log(uuidV4); // Un UUID de version 4.
     * ```
    */
    static v4(): `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Génère un UUID hiérarchique en fonction des options fournies.
     * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
     * @returns Un nouvel UUID hiérarchique (_HUID).
     * @example
     * ```typescript
     *  const hierarchicalUUID = uuid.hv1({ parentId: '123456789012', collectionId: 'abcdefabcdef' });
     *  console.log(hierarchicalUUID); // Un nouvel UUID hiérarchique (_HUID).
     * ```
    */
    static hv1(options?: HierarchicalUUIDOptions): _HUID;
}
