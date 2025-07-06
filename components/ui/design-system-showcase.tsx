'use client'

import { Button } from './button'
import { Input } from './input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './card'

export function DesignSystemShowcase() {
  return (
    <div className="p-8 space-y-12 bg-background-light min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 text-center mb-8">DebutHub Design System</h1>
        
        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Headings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h1 className="text-h1">H1 - Hero Title</h1>
                  <p className="text-caption text-input-placeholder">36px / Bold / -0.2px</p>
                </div>
                <div>
                  <h2 className="text-h2">H2 - Section Header</h2>
                  <p className="text-caption text-input-placeholder">28px / Semibold</p>
                </div>
                <div>
                  <h3 className="text-h3">H3 - Subheading</h3>
                  <p className="text-caption text-input-placeholder">22px / Semibold</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Body Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-body-large">Body Large - Standard content text</p>
                  <p className="text-caption text-input-placeholder">18px / Regular</p>
                </div>
                <div>
                  <p className="text-body">Body - UI descriptions and inputs</p>
                  <p className="text-caption text-input-placeholder">16px / Regular</p>
                </div>
                <div>
                  <p className="text-caption">Caption - Labels, timestamps</p>
                  <p className="text-caption text-input-placeholder">12px / Medium</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colors Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-white border border-accent-soft-gray rounded"></div>
                  <div>
                    <p className="text-body font-medium">Primary White</p>
                    <p className="text-caption text-input-placeholder">#FFFFFF</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-charcoal rounded"></div>
                  <div>
                    <p className="text-body font-medium">Primary Charcoal</p>
                    <p className="text-caption text-input-placeholder">#1E1E1E</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-navy rounded"></div>
                  <div>
                    <p className="text-body font-medium">Trust Navy</p>
                    <p className="text-caption text-input-placeholder">#101828</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-warm-orange rounded"></div>
                  <div>
                    <p className="text-body font-medium">Warm Orange</p>
                    <p className="text-caption text-input-placeholder">#F97316</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-blush-pale-orange rounded"></div>
                  <div>
                    <p className="text-body font-medium">Blush Pale Orange</p>
                    <p className="text-caption text-input-placeholder">#FFF7F1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Functional Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-functional-success rounded"></div>
                  <div>
                    <p className="text-body font-medium">Success Green</p>
                    <p className="text-caption text-input-placeholder">#22C55E</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-functional-error rounded"></div>
                  <div>
                    <p className="text-body font-medium">Error Red</p>
                    <p className="text-caption text-input-placeholder">#EF4444</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-functional-info rounded"></div>
                  <div>
                    <p className="text-body font-medium">Info Blue</p>
                    <p className="text-caption text-input-placeholder">#3B82F6</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-gold rounded"></div>
                  <div>
                    <p className="text-body font-medium">Gold Accent</p>
                    <p className="text-caption text-input-placeholder">#F4C542</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="primary">Primary Button</Button>
                  <p className="text-caption text-input-placeholder">Primary actions, CTAs</p>
                </div>
                <div className="space-y-3">
                  <Button variant="secondary">Secondary Button</Button>
                  <p className="text-caption text-input-placeholder">Secondary actions, outlines</p>
                </div>
                <div className="space-y-3">
                  <Button variant="text">Text Button</Button>
                  <p className="text-caption text-input-placeholder">Minimal actions, links</p>
                </div>
                <div className="space-y-3">
                  <Button variant="destructive">Destructive Button</Button>
                  <p className="text-caption text-input-placeholder">Delete, remove actions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="primary" size="sm">Small Button</Button>
                  <p className="text-caption text-input-placeholder">Compact spaces</p>
                </div>
                <div className="space-y-3">
                  <Button variant="primary" size="default">Default Button</Button>
                  <p className="text-caption text-input-placeholder">Standard use</p>
                </div>
                <div className="space-y-3">
                  <Button variant="primary" size="lg">Large Button</Button>
                  <p className="text-caption text-input-placeholder">Hero sections, emphasis</p>
                </div>
                <div className="space-y-3">
                  <Button variant="primary" size="icon">⚙</Button>
                  <p className="text-caption text-input-placeholder">Icon-only buttons</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Input Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Input Fields</h2>
          <Card>
            <CardHeader>
              <CardTitle>Input Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-body font-medium text-secondary-navy">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-body font-medium text-secondary-navy">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <div className="space-y-2">
                  <label className="text-body font-medium text-secondary-navy">Full Name</label>
                  <Input type="text" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-body font-medium text-secondary-navy">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-body font-medium text-secondary-navy">Disabled Input</label>
                <Input type="text" placeholder="This input is disabled" disabled />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>
                  A simple card with header, content, and footer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  This is the main content area of the card. It can contain any type of content including text, images, or other components.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card hover>
              <CardHeader>
                <CardTitle>Hover Card</CardTitle>
                <CardDescription>
                  This card has hover effects enabled
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Hover over this card to see the elevation and scale effects. Perfect for interactive elements.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">Hover Me</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Spacing System</h2>
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">4px - Element gap</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">8px - Input padding, badge margins</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">16px - Button padding, grid gutter</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">24px - Section padding, card padding</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">32px - Section separation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-6 bg-secondary-warm-orange"></div>
                  <span className="text-body">48px - Hero and Footer padding</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Animation Section */}
        <section className="space-y-6">
          <h2 className="text-h2 border-b border-accent-soft-gray pb-2">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-entrance">
              <CardHeader>
                <CardTitle>Entrance Animation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  This card uses the entrance animation (fade + slide up). Perfect for page loads and new content.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-modal">
              <CardHeader>
                <CardTitle>Modal Animation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  This card uses the modal animation (spring scale-in). Great for dialogs and popups.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
} 