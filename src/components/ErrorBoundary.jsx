import { Component } from "react";
import FetchError from "./FetchError";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err) {
    console.error(err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <FetchError
          error="Oops, An unexpected error occurred"
          buttonText="Reload Page"
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
