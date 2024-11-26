# Intersection Observer API Examples

This repository contains practical examples demonstrating various use cases of the Intersection Observer API. Each example is self-contained and can be run directly in the browser without any build steps.

## 🎯 Purpose

The goal of this repository is to provide clear, practical examples of how to use the Intersection Observer API in real-world scenarios. Each example is designed to demonstrate different aspects of the API while solving common web development challenges.

## 📚 Examples

### [01-simple-visibility](./01-simple-visibility)

A basic implementation showing how to detect when elements enter and exit the viewport. This example helps understand the fundamental concepts of the Intersection Observer API.

**Key concepts covered:**

- Basic Intersection Observer setup
- Handling intersection entries

### [02-lazy-loading-images](./02-lazy-loading-images)

An implementation of lazy loading images using the Intersection Observer API. Images are loaded only when they're about to enter the viewport, improving initial page load performance.

**Key concepts covered:**

- Creating an efficient lazy loading system for images
- Handling image loading states
- Performance optimization techniques

### [03-infinite-scroll](./03-infinite-scroll)

This example demonstrates how to implement infinite scroll functionality using the Intersection Observer API. Content is dynamically loaded as the user scrolls down the page, providing a seamless user experience, making it great choice for e-commerce stores, social media apps, job portals, real estate platforms etc.

**Key concepts covered:**

- Dynamically load content when the user reaches the bottom of the page
- Responsive design: loading a different number of cards based on the screen size
- Performance optimization: Using the rootMargin property to preload content slightly before it's visible in the viewport.

### [04-scroll-animations](./04-scroll-animations)

This example demonstrates how to use the Intersection Observer API to trigger scroll-based animations with a single-use mechanism.

**Key concepts covered:**

- Creating scroll-triggered animations
- Implementing a one-time animation trigger
- Adding subtle entrance animations

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/intersection-observer-examples.git
```

2. Navigate to any example directory:

```bash
cd intersection-observer-examples/01-simple-visibility
```

3. Open the `index.html` file in your browser
