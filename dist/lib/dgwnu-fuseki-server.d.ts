/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 */
export declare function runServer(args?: string[]): void;
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
export declare function startServer(args?: string[]): void;
/**
 * Restart Jena Fuseki Server with PM2
 */
export declare function restartServer(): void;
/**
 * Stop Jena Fuseki Server with PM2
 */
export declare function stopServer(): void;
