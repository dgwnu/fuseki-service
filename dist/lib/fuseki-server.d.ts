/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
import { Observable } from 'rxjs';
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 * @returns run feedback output
 */
export declare function runServer(args?: string[]): string;
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
export declare function startServer(args?: string[]): Observable<void>;
/**
 * Restart Jena Fuseki Server with PM2
 */
export declare function restartServer(): Observable<void>;
/**
 * Stop Jena Fuseki Server with PM2
 */
export declare function stopServer(): Observable<void>;
