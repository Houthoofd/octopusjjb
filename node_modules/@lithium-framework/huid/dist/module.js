import $hgUW1$getrandomvalues from "get-random-values";

// ===============================================
// https://www.npmjs.com/package/get-random-values
// ===============================================

class $149c1bd638913645$export$74e446f6456d826d extends String {
    /**
   * Obtient l'identifiant de composant en extrayant la première partie de l'UUID.
   * @returns L'identifiant de composant.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.componentId); // '123456789012'
   * ```
  */ get componentId() {
        return this.split("-")[0];
    }
    /**
   * Obtient la première section de l'UUID après division par '-'.
   * @returns La première section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section1); // '1234'
   * ```
  */ get section1() {
        return this.split("-")[1];
    }
    /**
   * Obtient la deuxième section de l'UUID après division par '-'.
   * @returns La deuxième section de l'UUID.
   * @example
   * ```typescipt
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section2); // '5678'
   * ```
  */ get section2() {
        return this.split("-")[2];
    }
    /**
   * Obtient la troisième section de l'UUID après division par '-'.
   * @returns La troisième section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section3); // '90ab'
   * ```
  */ get section3() {
        return this.split("-")[3];
    }
    /**
   * Obtient l'identifiant de collection en extrayant la cinquième partie de l'UUID.
   * @returns L'identifiant de collection.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.collectionId); // 'abcdefabcdef'
   * ```
  */ get collectionId() {
        return this.split("-")[4];
    }
    /**
   * Obtient l'identifiant parent en concaténant les sections 1, 2 et 3.
   * @returns L'identifiant parent.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.parentId); // '1234567890ab'
   * ```
  */ get parentId() {
        return [
            this.section1,
            this.section2,
            this.section3
        ].join("");
    }
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
  */ extend(options) {
        return $149c1bd638913645$export$31b40729666a4ae0.hv1({
            parentId: this.componentId,
            collectionId: this.collectionId
        });
    }
}
class $149c1bd638913645$export$31b40729666a4ae0 {
    /**
   * Obtient une valeur par défaut pour l'identifiant de composant.
   * @returns '000000000000' en tant que ComponentId.
  */ static get componentId() {
        return "000000000000";
    }
    /**
   * Obtient une valeur par défaut pour la première section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment1() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la deuxième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment2() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la troisième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment3() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour l'identifiant de collection.
   * @returns '000000000000' en tant que CollectionId.
  */ static get collectionId() {
        return "000000000000";
    }
    /**
   * Obtient un UUID NIL (null) par défaut.
   * @returns L'UUID NIL sous forme de chaîne.
  */ static get NIL() {
        return new $149c1bd638913645$export$74e446f6456d826d(`${$149c1bd638913645$export$31b40729666a4ae0.componentId}-${$149c1bd638913645$export$31b40729666a4ae0.segment1}-${$149c1bd638913645$export$31b40729666a4ae0.segment2}-${$149c1bd638913645$export$31b40729666a4ae0.segment3}-${$149c1bd638913645$export$31b40729666a4ae0.collectionId}`);
    }
    /**
   * Encode une chaîne de longueur fixe en remplaçant certains caractères par des valeurs hexadécimales aléatoires.
   * @param chaine - Une chaîne de longueur fixe.
   * @returns Une chaîne de longueur fixe avec des valeurs hexadécimales aléatoires.
   * @example
   * ```typescript
   *  const encoded = uuid.encode('123456789012');
   *  console.log(encoded); // '1a2b3c4d5e6f'
   * ```
  */ static encode(chaine) {
        return chaine.replace(/[018]/g, (c)=>{
            return (c ^ (0, $hgUW1$getrandomvalues)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID de version 4 en utilisant des valeurs aléatoires.
   * @returns Un UUID de version 4 sous forme de chaîne.
   * @example
   * ```typescript
   *  const uuidV4 = uuid.v4();
   *  console.log(uuidV4); // Un UUID de version 4.
   * ```
  */ static v4() {
        return $149c1bd638913645$export$31b40729666a4ae0.NIL.replace(/[018]/g, (c)=>{
            return (c ^ (0, $hgUW1$getrandomvalues)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID hiérarchique en fonction des options fournies.
   * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
   * @returns Un nouvel UUID hiérarchique (_HUID).
   * @example
   * ```typescript
   *  const hierarchicalUUID = uuid.hv1({ parentId: '123456789012', collectionId: 'abcdefabcdef' });
   *  console.log(hierarchicalUUID); // Un nouvel UUID hiérarchique (_HUID).
   * ```
  */ static hv1(options) {
        if (!options) options = {
            parentId: null,
            collectionId: null
        };
        let componentId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.componentId);
        let segment1 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment1);
        let segment2 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment2);
        let segment3 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment3);
        let collectionId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.collectionId);
        if (options.parentId && options.parentId.length == 12) {
            segment1 = options.parentId.slice(0, 4);
            segment2 = options.parentId.slice(4, 8);
            segment3 = options.parentId.slice(8, 12);
        } else console.error("parentId.length exeded 12 char length.");
        if (options.collectionId) collectionId = options.collectionId;
        return new $149c1bd638913645$export$74e446f6456d826d(`${componentId}-${segment1}-${segment2}-${segment3}-${collectionId}`);
    }
}


export {$149c1bd638913645$export$74e446f6456d826d as _HUID, $149c1bd638913645$export$31b40729666a4ae0 as uuid};
//# sourceMappingURL=module.js.map
