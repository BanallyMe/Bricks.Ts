module BanallyMe
{
    export module Bricks
    {
        export module DependencyInjection
        {
            /**
             * The dependency injection container that holds all configured services of the application and resolves services
             * when told to do so.
             */
            export class Container
            {
                /**
                 * Collection of configured services of the application.
                 */
                private services : IService[];
            }
        }
    }
    
}