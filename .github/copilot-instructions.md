# Copilot Instructions for cloudhadi-service-portal (SPFx)

## Project Overview
- This is a SharePoint Framework (SPFx) web part project targeting Microsoft 365 tenants.
- Main functionality is implemented in `src/webparts/cloudhadiServicePortal/`.
- Uses React (with Fluent UI) for UI components and SharePoint REST API for data operations.

## Key Architecture & Patterns
- **Web Part Entry:** `CloudhadiServicePortalWebPart.ts` is the entry point for the web part.
- **Component Structure:** UI logic is in `components/` (e.g., `CreateRequest.tsx`, `FAQ.tsx`).
- **Styling:** Uses CSS modules (e.g., `CloudhadiServicePortal.module.scss`).
- **Localization:** Strings are managed in `loc/`.
- **Assets:** Images and static files are in `assets/`.
- **Data Flow:** Components interact with SharePoint lists (e.g., 'Service Portal') via PnPjs. Example: `CreateRequest.tsx` submits form data to a list.
- **Site Schema:** Check the Schema of SharePoint site in file `SiteSchema\ProvisioningWorkplace.xml` for the structure of lists and fields.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start local dev server:** `gulp serve` (uses SharePoint Workbench)
- **Build for production:** `gulp bundle --ship && gulp package-solution --ship`
- **Debugging:** Use browser dev tools; React components are hot-reloaded in local workbench.
- **Testing:** No explicit test framework found; manual testing via SharePoint Workbench is typical.

## Project Conventions
- **React functional components** with hooks for state management.
- **Fluent UI** for consistent SharePoint look and feel.
- **SharePoint REST API**: Use `_spPageContextInfo.webAbsoluteUrl` and request digest for POSTs.
- **Field Naming:** List fields should match property names in code refer from file `SiteSchema\ProvisioningWorkplace.xml`.
- **Error Handling:** User feedback is shown in the UI (e.g., success/error messages after form submission).

## Integration Points
- **SharePoint Lists:** Data is stored in lists (e.g., 'Service Portal'). Ensure lists/fields exist before deploying.
- **PnPjs:** Can be used for SharePoint operations (not required, but supported).
- **Teams:** Teams icons/assets are in `teams/`.

## External Reference
Refer to the coding patterns and structure from the following project as inspiration:
- Project: https://github.com/pnp/pnpjs/tree/version-4/samples/spfx-react-components
- Specifically focus on how React components are structured in `src/components` and state is managed in `src/store`.
- Use similar patterns for state management and API calls.

## Example: Adding a Service Request
- See `CreateRequest.tsx` for the pattern to collect form data and POST to a SharePoint list.
- Use PnPjs for REST calls. Always include request digest and correct headers.

## References
- [README.md](../README.md) for setup and build instructions.
- [SPFx Docs](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/overview-sharepoint-framework)

---

If you are unsure about a pattern or integration, check the corresponding file in `src/webparts/cloudhadiServicePortal/` or ask for clarification.
