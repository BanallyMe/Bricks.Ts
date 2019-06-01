module BanallyMe
{
    export module Bricks
    {
        export module DependencyInjection
        {
            /**
             * Declares different types of lifetimes for Services that can be injected using Bricks.
             */
            export enum ServiceLifetime
            {
                /**
                 * Transient lifetime: A new instance of the service is generated for each injection of the service.
                 */
                Transient,
                /**
                 * Singleton lifetime: A single instance is generated when registering a service. This specific instance is passed
                 * each time the service gets injected.
                 */
                Singleton
            }
        }
    }
}