# Project Deployment Guide

This document explains when to deploy each project type listed below, their differences, and correlations.

---

## <a href="ASP.NETcorewebAPI" target="_blank" rel="noopener noreferrer">1. ASP.NET Core Web API</a>
- **Best for:** Building RESTful APIs or backend services using .NET.
- **Use when:** You need a scalable, cross-platform backend for web, mobile, or desktop clients.

## <a href="ClassLibrary" target="_blank" rel="noopener noreferrer">2. Class Library (.NET)</a>
- **Best for:** Reusable code components (business logic, utilities) in .NET.
- **Use when:** You want to share code across multiple .NET projects (e.g., ASP.NET, Xamarin).

## <a href="CMake" target="_blank" rel="noopener noreferrer">3. CMake</a>
- **Best for:** Cross-platform C/C++ project builds.
- **Use when:** You need to manage complex builds or support multiple platforms/compilers.

## <a href="Flask-Jade" target="_blank" rel="noopener noreferrer">4. Flask-Jade</a>
- **Best for:** Lightweight Python web apps with Jade (now Pug) templating.
- **Use when:** You want a simple, quick-to-deploy web server with Python and prefer Jade/Pug templates.

## <a href="JLabReactTS" target="_blank" rel="noopener noreferrer">5. JLabReactTS</a>
- **Best for:** Modern web frontends using React and TypeScript.
- **Use when:** You need a robust, type-safe, component-based UI for web applications.

## <a href="m.android-.net" target="_blank" rel="noopener noreferrer">6. m.android-.net</a>
- **Best for:** Native Android apps using .NET (Xamarin/MAUI).
- **Use when:** You want to build Android apps with C# and share code with other .NET platforms.

## <a href="m.iosapp-.net" target="_blank" rel="noopener noreferrer">7. m.iosapp-.net</a>
- **Best for:** Native iOS apps using .NET (Xamarin/MAUI).
- **Use when:** You want to build iOS apps with C# and share code with other .NET platforms.

## <a href="PHP" target="_blank" rel="noopener noreferrer">8. PHP</a>
- **Best for:** Server-side scripting for web applications.
- **Use when:** You need a simple, widely supported backend for web pages or APIs.

## <a href="ReactJS" target="_blank" rel="noopener noreferrer">9. ReactJS</a>
- **Best for:** Interactive, component-based web UIs with JavaScript.
- **Use when:** You want a dynamic frontend, but don’t need TypeScript’s type safety.

## <a href="StaticLibrary" target="_blank" rel="noopener noreferrer">10. Static Library</a>
- **Best for:** Reusable, compiled code in C/C++.
- **Use when:** You want to share code between C/C++ projects without exposing source code.

---

## Differences & Correlations

- **Web APIs:**  
    - **ASP.NET Core Web API** uses C# and the .NET ecosystem ([Microsoft Docs](https://learn.microsoft.com/aspnet/core/)).  
    - **Flask-Jade** uses Python and the Flask ecosystem, with Jade/Pug templating ([Flask Documentation](https://flask.palletsprojects.com/), [Pug/Jade](https://pugjs.org/)).  
    - **PHP** uses the PHP language and its extensive web ecosystem ([PHP Manual](https://www.php.net/manual/en/)).  
    Each offers different tooling, libraries, and deployment options based on their language and community.

- **Frontend:**  
    - **JLabReactTS** uses React with TypeScript, providing type safety and integration with the TypeScript ecosystem ([TypeScript Handbook](https://www.typescriptlang.org/docs/), [React Docs](https://react.dev/)).  
    - **ReactJS** uses React with JavaScript, focusing on flexibility and rapid development ([React Docs](https://react.dev/)).  
    Both leverage the React library, but differ in language features and developer experience.
- **Mobile:** m.android-.net and m.iosapp-.net target Android and iOS, respectively, using .NET for cross-platform code sharing.
- **Libraries:** Class Library (.NET) and Static Library (C/C++) are for code reuse; the former for .NET, the latter for C/C++.
- **Build Systems:** CMake is for C/C++ project builds, not an app or library itself.
- **Correlations:** Class Libraries can be used in ASP.NET, m.android-.net, and m.iosapp-.net. React frontends often consume APIs built with ASP.NET, Flask, or PHP.

---
You can enhance visualization by adding simple diagrams or icons. For example, you can use [Mermaid](https://mermaid-js.github.io/) diagrams for architecture overviews, or insert relevant icons via Markdown image links.

Here’s a suggestion to add at `$SELECTION_PLACEHOLDER$`:

---

## Visual Overview

```mermaid
graph TD
    A[Frontend]
    B[Backend/API]
    C[Mobile]
    D[Libraries]
    E[Build System]

    A1[JLabReactTS<br/>(React+TS)]
    A2[ReactJS<br/>(React+JS)]
    B1[ASP.NET Core Web API]
    B2[Flask-Jade]
    B3[PHP]
    C1[m.android-.net]
    C2[m.iosapp-.net]
    D1[Class Library (.NET)]
    D2[Static Library (C/C++)]
    E1[CMake]

    A --> A1
    A --> A2
    B --> B1
    B --> B2
    B --> B3
    C --> C1
    C --> C2
    D --> D1
    D --> D2
    E --> E1

    A1 --> B1
    A1 --> B2
    A1 --> B3
    A2 --> B1
    A2 --> B2
    A2 --> B3
    C1 --> D1
    C2 --> D1
    B1 --> D1
    B2 --> D1
    B3 --> D1
    D2 --> E1
```

*This diagram shows how frontends, backends, mobile apps, libraries, and build systems relate. For more visual clarity, consider adding icons or images for each technology.*

---

You can also use icons from [Simple Icons](https://simpleicons.org/) or shields.io badges for each technology, for example:

![.NET](https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![CMake](https://img.shields.io/badge/CMake-064F8C?logo=cmake&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?logo=apple&logoColor=white)

---

*Feel free to adjust or expand the diagram and icons to best fit your documentation style and audience.*
Choose the template that matches your language, platform, and deployment needs.

---

## Example Projects & References

Below are example repositories and official references for each project type:

| Project Type            | Example Repo / Starter Template                                                                 | Official Reference                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **ASP.NET Core Web API**| [dotnet/aspnetcore-sample](https://github.com/dotnet/AspNetCore.Docs/tree/main/aspnetcore/tutorials/first-web-api/samples) | [ASP.NET Core Docs](https://learn.microsoft.com/aspnet/core/)                      |
| **Class Library (.NET)**| [dotnet/samples-classlib](https://github.com/dotnet/samples/tree/main/core/tutorials/library-with-visual-studio) | [Class Library Docs](https://learn.microsoft.com/dotnet/standard/class-libraries/) |
| **CMake**               | [cmake/example-project](https://github.com/ttroy50/cmake-examples)                            | [CMake Docs](https://cmake.org/documentation/)                                     |
| **Flask-Jade**          | [mrmrsn/flask-pug-example](https://github.com/mrmrsn/flask-pug-example)                       | [Flask Docs](https://flask.palletsprojects.com/) / [Pug Docs](https://pugjs.org/)  |
| **JLabReactTS**         | [vercel/next.js-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript) | [React Docs](https://react.dev/) / [TypeScript Docs](https://www.typescriptlang.org/) |
| **m.android-.net**      | [dotnet/maui-samples-android](https://github.com/dotnet/maui-samples)                         | [MAUI Docs](https://learn.microsoft.com/dotnet/maui/)                              |
| **m.iosapp-.net**       | [dotnet/maui-samples-ios](https://github.com/dotnet/maui-samples)                             | [MAUI Docs](https://learn.microsoft.com/dotnet/maui/)                              |
| **PHP**                 | [laravel/laravel](https://github.com/laravel/laravel) (Laravel Example)                       | [PHP Manual](https://www.php.net/manual/en/)                                       |
| **ReactJS**             | [facebook/create-react-app](https://github.com/facebook/create-react-app)                     | [React Docs](https://react.dev/)                                                   |
| **Static Library**      | [cmake/static-library-example](https://github.com/ttroy50/cmake-examples/tree/master/01-basic/A-staticLib) | [C++ Static Libraries](https://learn.microsoft.com/cpp/build/walkthrough-creating-and-using-a-static-library-cpp) |

*Explore these repositories for starter code and best practices. Official documentation links provide further guidance for each technology.*
