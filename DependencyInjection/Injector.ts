module BanallyMe
{
    export module Bricks
    {
        export module DependencyInjection
        {
            /**
             * The Injector creates new instances of classes and automatically injects their dependencies.
             */
            export class Injector
            {
                /**
                 * The dependency injection container, that holds all configured services of the application.
                 */
                private container : Container;

                /**
                 * Starts a new dependency injection container and populates it with all configured services.
                 */
                constructor()
                {
                    this.container = new Container();
                }
            }
        }
    }
}