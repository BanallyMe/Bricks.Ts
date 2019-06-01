module BanallyMe
{
    export module Bricks
    {
        export module DependencyInjection
        {
            /**
             * Contains the configuration of a resolvable service.
             */
            export interface IService
            {
                /**
                 * Identity of this service.
                 */
                name : string;

                /**
                 * Lifetime of this service.
                 */
                lifetime: ServiceLifetime;
            }
        }
    }
}