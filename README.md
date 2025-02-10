# Pattern - State + Actions

## Overview

## How to think about building an application?

Forget about specific technologies
Forget about different teams
Forget about separation about concerns
Forget about frameworks
At the very highest level, we have to answer the question "what is an application"? before we can build it
Data + Flows vs State + Actions
Doesn't matter what you are building or where you build it
It seems so high level? Must be useless, right? No, it is fundamental. As a developer, we will find ourselves coming back to this concept over and over.

## Examples

Today we're going to build an app to feed and train Pokemon. How do you feed a pokemon? You click a button =
State - pokemon is fed, pokemon is not fed
Action - feed pokemon
Very simple. However, this is fundamentally no different than the series of servers, load balancers, microservices and algorithms that collectively self-drive an automated car. It's just state + actions.

## Limit the approach

For the purposes of this discussion, we want to build "user-facing" software deployed on a web server.
We're also going to cheat a little and simulate a REST-based server
Not going to worry about multiple application users, etc

## Build

Display a list of the pokemon in my stable
Display a button to feed each pokemon

## API planning and decomposition

Seems simple
GET /pokemons - list of pokemon
PUT /pokemons/:id to feed a pokemon
Getting complicated already
Data breakdown
Total pokemon
Total pokemon that are fed
List of pokemon
Id for each pokemon
Label for each pokemon
Fed indicator for each pokemon

GET list vs GET item
Wait! we're already making choices
GET list - get a list of id's
GET item - get the pokemon

Principles
The Principle of Least Complexity, also known as the KISS (Keep It Simple, Stupid) - "Should be no more complex than needed"
Correctness vs Performance
Example - fed count. UI could just count the number of fed pokemon in the list. but wait!

Questions to ask?
UX
how do we show if a pokemon has been fed?
can we feed a pokemon that has beed fed already?
what happens if I don't have any pokemon?
what happens if I have 10,000 pokemon?

CODE
Structure -
API + types
Components
HOOKS where is our state? when does it get refreshed?

State - what is a query key? why do we need it?
Pessimistic vs optimistic updates
State - API is always the source of truth
Talk about API bugs, caching, race conditions, etc

Features vs routes
Components - dumb vs smart
Errors
Empty state
Searching
