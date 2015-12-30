PyComic
=======

A static website for generating Pythonic comics.

What?
-----

we need to produce educational material for kids as part of the PSF's ongoing
efforts with the BBC micro:bit project.

We want our resources to appeal to the 11yo target age group and so those with
more of an affinity with visual rather than verbal instructions are catered
for, we've decided to create some of our resources as comics.

Our comics will feature "Yellow" and "Blue", the Python snakes..!

How?
----

This is a static website (i.e. there is no backend). Users use some simple
JavaScript to appropriately manipulate the DOM to create their comic. If
there's a correctly configured query string in the URL we'll use that to define
the comic - allowing people to share their work via links.
